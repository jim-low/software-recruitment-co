import { Button } from '../ui/button';
import { Input } from '../ui/input';
import './style.less';

export default function HeroSection() {
  return (
    <div id='hero' className="flex items-center justify-center h-[674px] bg-brand-blue gap-[42px]">
      <div className="elevate-your-career">
        <p className='text-brand-white text-base'>Software Recruitment Specialists</p>
        <h1 className='text-brand-white text-title-large font-bold'>Elevate your career</h1>
        <div className='job-search-button-group'>
          <Input className='job-search-input' placeholder='E.g. networking' />
          <Button>Search jobs</Button>
        </div>
      </div>
      <div className="image-section">
        <img
          src="girl-glasses-standing.png"
          alt="person-with-glasses-standing"
          width={507}
          height={480}
          className=''
        />
      </div>
    </div>
  )
}
