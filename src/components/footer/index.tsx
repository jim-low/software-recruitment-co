import { COMPANY_NAME, FOOTER_ICONS } from "../../constants";

export default function Footer() {
  const footerSections = [
    {
      title: 'Explore',
      navItems: [
        { label: 'Homepage', link: '#' },
        { label: 'For jobseekers', link: '#' },
        { label: 'For clients', link: '#' },
        { label: 'Our sectors', link: '#' },
        { label: 'Resources', link: '#' },
        { label: 'Contact us', link: '#' },
      ]
    },
    {
      title: 'Sectors',
      navItems: [
        { label: 'Software engineering', link: '#' },
        { label: 'DevOps', link: '#' },
        { label: 'Cloud', link: '#' },
        { label: 'Infrastructure', link: '#' },
        { label: 'Testing', link: '#' },
        { label: 'Security', link: '#' },
      ]
    },
    {
      title: 'Services',
      navItems: [
        { label: 'Nav Item', link: '#' },
        { label: 'Nav Item', link: '#' },
        { label: 'Nav Item', link: '#' },
        { label: 'Nav Item', link: '#' },
        { label: 'Nav Item', link: '#' },
      ]
    },
  ];

  return (
    <div id='footer' className="py-[80px] px-[120px] h-[484px] bg-[blue] text-white flex gap-[24px]">
      <div className="w-1/4">
        <p className="mb-[30px]">{COMPANY_NAME}</p>
        <div className="flex items-center gap-[20px]">
          {FOOTER_ICONS.map(({ icon: Icon, link }) => {
            return (
              <a href={link} target="_blank">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {footerSections.map(section => {
        const { title, navItems } = section;

        return (
          <div className="flex flex-col w-1/4">
            <h5 className="mb-[30px]">{title}</h5>
            <ul>
              {navItems.map(({ label, link }) => {
                return (
                  <li className="mb-[20px]">
                    <a href={link} target='_blank'>
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  )
}
