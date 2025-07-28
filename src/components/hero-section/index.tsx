import { Button } from '../ui/button';
import { Input } from '../ui/input';
import './style.less';

export default function HeroSection() {
  return (
    <div id='hero' className="flex items-center justify-center h-[674px] bg-[blue]">
      <div className="elevate-your-career">
        <p>Software Recruitment Specialists</p>
        <h1>Elevate your career</h1>
        <div className='job-search-button-group'>
          <Input className='job-search-input' placeholder='E.g. networking' />
          <Button>Search jobs</Button>
        </div>
      </div>
      <div className="image-section">
        <img src="hero-section-image.jpg" alt="person-with-glasses-standing" />
      </div>
    </div>
  )
}
