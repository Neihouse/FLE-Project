
// Example of dynamic import for code splitting
const LeadManagementComponent = React.lazy(() => import('./components/LeadManagementComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LeadManagementComponent />
    </React.Suspense>
  );
}

export default App;
