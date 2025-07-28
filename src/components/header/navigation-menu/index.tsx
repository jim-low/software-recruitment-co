import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../../ui/navigation-menu";

type NavItem = {
  label?: string;
  link?: string;
  dropdownItems?: NavItem[];
};

const navLinks: NavItem[] = [
  {
    label: 'For jobseekers',
    dropdownItems: [
      { label: 'Jobseekers Item1', link: '#' },
      { label: 'Jobseekers Item2', link: '#' },
      { label: 'Jobseekers Item3', link: '#' },
      { label: 'Jobseekers Item4', link: '#' },
    ],
  },
  {
    label: 'For clients',
    dropdownItems: [
      { label: 'Clients Item1', link: '#' },
      { label: 'Clients Item2', link: '#' },
      { label: 'Clients Item3', link: '#' },
      { label: 'Clients Item4', link: '#' },
    ],
  },
  {
    label: 'Sectors',
    dropdownItems: [
      { label: 'Sectors Item1', link: '#' },
      { label: 'Sectors Item2', link: '#' },
      { label: 'Sectors Item3', link: '#' },
      { label: 'Sectors Item4', link: '#' },
    ],
  },
  {
    label: 'Resources',
    dropdownItems: [
      { label: 'Resources Item1', link: '#' },
      { label: 'Resources Item2', link: '#' },
      { label: 'Resources Item3', link: '#' },
      { label: 'Resources Item4', link: '#' },
    ],
  },
];

export default function NavMenu() {
  return (
    <>
      {navLinks.map((item, navIndex) => {
        const { label, dropdownItems = [], link = '' } = item;

        if (!!link) {
          return (
            <NavigationMenu key={navIndex}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }

        return (
          <NavigationMenu key={navIndex}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {dropdownItems.map((dropdown, dropdownIndex) => {
                    const { label, link: dropdownLink } = dropdown;
                    return (
                      <NavigationMenuLink key={dropdownIndex} onClick={() => window.open(dropdownLink, '_blank')}>{label}</NavigationMenuLink>
                    );
                  })}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )
      })}
    </>
  )
}
