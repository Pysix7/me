import { SocialLink } from '~/interface';
import './index.less';

export default (props: SocialLink) => {

  const { icon, title, url } = props;
  return (
    <div className="linkComp">
      <a href={url} target="blank" >
        {icon}
        <span>{title}</span>
      </a>
    </div>
  )
}