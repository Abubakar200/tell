import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <nav className="fixed px-4 z-50 border-b bg-white shadow-sm top-0 w-full h-14 flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button
        variant={"primary"}
          size={"sm"}
          className="hidden md:block rounded-sm h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button variant={"primary"} size={"sm"} className="rounded-sm md:hidden block">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
