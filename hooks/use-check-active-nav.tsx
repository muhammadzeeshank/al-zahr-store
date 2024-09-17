import { usePathname } from "next/navigation";

export default function useCheckActiveNav() {
  const pathname = usePathname();

  const checkActiveNav = (nav: string) => {
    let pathArray = pathname.split("/").filter((item) => item !== "");

    if (pathArray.length > 2) {
      pathArray = pathArray.slice(0, 2);
      const resultPath = pathArray.join("/");
      return resultPath === nav.replace(/^\//, '');
    } else {
      return pathname === nav;
    }
  };

  return { checkActiveNav };
}
