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
    <div id='footer' className="py-[80px] px-[120px] h-[484px] bg-brand-blue text-white flex gap-[24px]">
      <div className="w-1/4">
        <p className="mb-[30px] text-md font-bold">{COMPANY_NAME}</p>
        <div className="flex items-center gap-[20px]">
          {FOOTER_ICONS.map(({ icon: Icon, link }, i) => {
            return (
              <a key={i} href={link} target="_blank">
                <Icon className="text-[20px]" />
              </a>
            );
          })}
        </div>
      </div>

      {footerSections.map(section => {
        const { title, navItems } = section;

        return (
          <div key={title} className="flex flex-col w-1/4">
            <h5 className="mb-[30px] text-[33px] font-bold">{title}</h5>
            <ul>
              {navItems.map(({ label, link }, i) => {
                return (
                  <li key={i} className="mb-[20px]">
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
