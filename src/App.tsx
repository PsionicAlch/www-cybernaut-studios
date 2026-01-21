import { RouterProvider } from "./router/RouterProvider";
import { RouterView } from "./router/RouterView";
import DefaultLayout from "./layouts/Default";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <RouterProvider>
      <DefaultLayout>
        <RouterView
          routes={[
            { path: "/", component: HomePage },
            { path: "/about", component: About },
            { path: "/privacy", component: Privacy },
          ]}
          notFound={NotFound}
        />
      </DefaultLayout>
    </RouterProvider>
  );
}

export default App;
