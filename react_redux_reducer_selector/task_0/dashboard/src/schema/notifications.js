import * as notificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

/**
 * Schema definitions for normalizing notification data
 */
const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data with error handling
let normalizedData;
try {
  normalizedData = normalize(notificationsData.default, [notification]);
} catch (error) {
  console.error("Error normalizing notifications data:", error);
  normalizedData = {
    entities: { notifications: {}, messages: {}, users: {} },
    result: []
  };
}

export { normalizedData };

/**
 * Get all notifications for a specific user
 * @param {string} userId - The ID of the user to get notifications for
 * @returns {Array} Array of notification messages for the user
 */
export function getAllNotificationsByUser(userId) {
  if (!userId) {
    console.warn("getAllNotificationsByUser called without userId");
    return [];
  }

  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  if (!notifications || !messages) {
    console.warn("Notification data not properly normalized");
    return [];
  }

  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      const message = messages[notifications[property].context];
      if (message) {
        notificationsByUser.push(message);
      }
    }
  }

  return notificationsByUser;
}
