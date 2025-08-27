
import PaymentHistory from "@/components/userComponet/paymentHistory";
import type { ISidebarItem } from "@/types";


export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Payment History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        component : PaymentHistory
      },
    ],
  },
];