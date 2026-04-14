import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { MobileLayout } from "./components/layout/MobileLayout";
import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";

const SplashPage = lazy(() => import("./pages/Splash"));
const LoginPage = lazy(() => import("./pages/Login"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const VendorDashboardPage = lazy(() => import("./pages/VendorDashboard"));
const FoodCourtPage = lazy(() => import("./pages/FoodCourt"));
const CartPage = lazy(() => import("./pages/Cart"));
const OrderConfirmationPage = lazy(() => import("./pages/OrderConfirmation"));
const BookMartPage = lazy(() => import("./pages/BookMart"));
const EventBookingPage = lazy(() => import("./pages/EventBooking"));
const NotificationsPage = lazy(() => import("./pages/Notifications"));
const QueueStatusPage = lazy(() => import("./pages/QueueStatus"));
const ProfilePage = lazy(() => import("./pages/Profile"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AppShell() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  );
}

const rootRoute = createRootRoute({ component: AppShell });

const splashRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <MobileLayout showBottomNav={false}>
      <Suspense fallback={<PageLoader />}>
        <SplashPage />
      </Suspense>
    </MobileLayout>
  ),
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => (
    <MobileLayout showBottomNav={false}>
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    </MobileLayout>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <DashboardPage />
      </Suspense>
    </MobileLayout>
  ),
});

const vendorDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vendor-dashboard",
  component: () => (
    <MobileLayout showBottomNav={false}>
      <Suspense fallback={<PageLoader />}>
        <VendorDashboardPage />
      </Suspense>
    </MobileLayout>
  ),
});

const foodCourtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/food-court",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <FoodCourtPage />
      </Suspense>
    </MobileLayout>
  ),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <CartPage />
      </Suspense>
    </MobileLayout>
  ),
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation",
  component: () => (
    <MobileLayout showBottomNav={false}>
      <Suspense fallback={<PageLoader />}>
        <OrderConfirmationPage />
      </Suspense>
    </MobileLayout>
  ),
});

const bookMartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book-mart",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <BookMartPage />
      </Suspense>
    </MobileLayout>
  ),
});

const eventBookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/event-booking",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <EventBookingPage />
      </Suspense>
    </MobileLayout>
  ),
});

const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notifications",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <NotificationsPage />
      </Suspense>
    </MobileLayout>
  ),
});

const queueStatusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/queue-status",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <QueueStatusPage />
      </Suspense>
    </MobileLayout>
  ),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <MobileLayout>
      <Suspense fallback={<PageLoader />}>
        <ProfilePage />
      </Suspense>
    </MobileLayout>
  ),
});

const routeTree = rootRoute.addChildren([
  splashRoute,
  loginRoute,
  dashboardRoute,
  vendorDashboardRoute,
  foodCourtRoute,
  cartRoute,
  orderConfirmationRoute,
  bookMartRoute,
  eventBookingRoute,
  notificationsRoute,
  queueStatusRoute,
  profileRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UIProvider>
    </QueryClientProvider>
  );
}
