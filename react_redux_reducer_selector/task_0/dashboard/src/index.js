import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { StyleSheet, css } from "aphrodite";

// Dynamic import for code splitting
const App = lazy(() => import("./App/App"));

// Add keyframes for loading spinner
const keyframes = {
  spin: {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={css(styles.errorContainer)}>
          <h1>Something went wrong.</h1>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const LoadingFallback = () => (
  <div className={css(styles.loadingContainer)}>
    <div className={css(styles.loadingSpinner)}></div>
    <p>Loading dashboard...</p>
  </div>
);

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  loadingSpinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #e01d3f",
    borderRadius: "50%",
    animationName: keyframes.spin,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    marginBottom: "20px",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff8f8",
    color: "#e01d3f",
    textAlign: "center",
    padding: "20px",
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);