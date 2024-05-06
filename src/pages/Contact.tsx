import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
  return (
    <div className="buttons-container">

          <a className="button-link" href='https://www.linkedin.com/in/brunacborgesm/' target='_blank'>
            <LinkedInIcon />
            LinkedIn
          </a>
          
          <a className="button-link" href='https://github.com/brunacborgesm' target='_blank'>
            <GitHubIcon />
            GitHub
          </a>
          
          <a className="button-link" href='mailto:brunaborgesdev@gmail.com' target='_blank'>
            <EmailIcon />
            Gmail
          </a>

      </div>
  )
}
