import {
  LayoutDashboard,
  Gem,
  Coins,
  ShieldCheck,
  Wallet,
  FileSpreadsheet,
  AlertTriangle,
  LifeBuoy,
  BadgeCheck,
  KeyRound,
  LogOut,
  type LucideIcon,
} from "lucide-react";

export type CustomerNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const customerNav: CustomerNavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-gold", label: "My Gold", icon: Gem },
  { href: "/sgnx-gold", label: "SGNX Gold", icon: Coins },
  { href: "/custody-title", label: "Custody & Title", icon: ShieldCheck },
  { href: "/wallet", label: "Settlements", icon: Wallet },
  {
    href: "/payouts",
    label: "Distribution Statements",
    icon: FileSpreadsheet,
  },
  { href: "/risk-centre", label: "Risk Centre", icon: AlertTriangle },
  { href: "/support", label: "Support & Complaints", icon: LifeBuoy },
  { href: "/kyc", label: "KYC", icon: BadgeCheck },
  { href: "/2fa", label: "2FA", icon: KeyRound },
  { href: "/login", label: "Logout", icon: LogOut },
];
