import styles from './SkillsStyles.module.css'; // Import CSS module for styling
import checkMarkIconLight from './checkmark-light.svg'; // Import light mode checkmark icon

// SkillList component directly integrated
const SkillList = ({ src, skill }) => (
  <span className={styles.skillItem}>
    <img src={src} alt="Checkmark icon" />
    <p>{skill}</p>
  </span>
);

const Skills = () => {
  const checkMarkIcon = checkMarkIconLight; // Use light mode checkmark icon

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
          Languages
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="C" />
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="PHP" />
          <SkillList src={checkMarkIcon} skill="R" />
          <SkillList src={checkMarkIcon} skill="TypeScript" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-kitchen" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2Z" />
            <path d="M4 12v-6h16v6Z" />
            <path d="M4 12l3 -3v-4l8 -2v6l3 -3" />
          </svg>
          Frameworks
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React.js" />
          <SkillList src={checkMarkIcon} skill="Next js" />
          <SkillList src={checkMarkIcon} skill="Django" />
          <SkillList src={checkMarkIcon} skill="Flask" />
          <SkillList src={checkMarkIcon} skill="Express.js" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-merge" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <line x1="18" y1="12" x2="12" y2="12" />
          </svg>
          Tools
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Docker" />
          <SkillList src={checkMarkIcon} skill="VS Code" />
          <SkillList src={checkMarkIcon} skill="Webpack" />
          <SkillList src={checkMarkIcon} skill="Postman" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
          </svg>
          Databases
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="MySQL" />
          <SkillList src={checkMarkIcon} skill="PostgreSQL" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
          <SkillList src={checkMarkIcon} skill="SQLite" />
          <SkillList src={checkMarkIcon} skill="Redis" />
          <SkillList src={checkMarkIcon} skill="Prisma" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 16a4 4 0 0 0 4 -4a4 4 0 0 1 8 0a4 4 0 0 0 0 8h-12a4 4 0 0 1 0 -8Z" />
          </svg>
          Cloud Services
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="AWS" />
          <SkillList src={checkMarkIcon} skill="Google Cloud Platform (GCP)" />
          <SkillList src={checkMarkIcon} skill="Microsoft Azure" />
          <SkillList src={checkMarkIcon} skill="Heroku" />
          <SkillList src={checkMarkIcon} skill="DigitalOcean" />
          <SkillList src={checkMarkIcon} skill="Firebase" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

    

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-branch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="6" cy="18" r="2" />
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="12" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <line x1="18" y1="14" x2="18" y2="10" />
            <path d="M6 8a6 6 0 0 0 12 4" />
          </svg>
          Version Control
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Git" />
          <SkillList src={checkMarkIcon} skill="Subversion (SVN)" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          Libraries
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Redux" />
          <SkillList src={checkMarkIcon} skill="jQuery" />
          <SkillList src={checkMarkIcon} skill="Chart.js" />
          <SkillList src={checkMarkIcon} skill="Lottie" />
          <SkillList src={checkMarkIcon} skill="Formik" />
          <SkillList src={checkMarkIcon} skill="Yup" />
          <SkillList src={checkMarkIcon} skill="Reacr DnD" />
          <SkillList src={checkMarkIcon} skill="Socket.io" />  
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />
     

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="4" width="18" height="12" rx="1" />
            <line x1="7" y1="20" x2="17" y2="20" />
            <line x1="9" y1="16" x2="9" y2="20" />
            <line x1="15" y1="16" x2="15" y2="20" />
          </svg>
          Operating Systems
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Windows" />
          <SkillList src={checkMarkIcon} skill="Linux (Ubuntu, Kali, PopOS)" />
          <SkillList src={checkMarkIcon} skill="Android" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />


      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="4" width="18" height="12" rx="1" />
            <line x1="7" y1="20" x2="17" y2="20" />
            <line x1="9" y1="16" x2="9" y2="20" />
            <line x1="15" y1="16" x2="15" y2="20" />
          </svg>
          Frontend Development
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="Sass" />
          <SkillList src={checkMarkIcon} skill="Bootstrap" />
          <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
          <SkillList src={checkMarkIcon} skill="Material-UI" />
          <SkillList src={checkMarkIcon} skill="Shadcn UI" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
        <h2 className={styles.sectionHeading}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-server" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="4" width="18" height="8" rx="1" />
            <rect x="3" y="12" width="18" height="8" rx="1" />
            <line x1="7" y1="8" x2="7" y2="8.01" />
            <line x1="7" y1="16" x2="7" y2="16.01" />
          </svg>
          Backend Development
        </h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Node.js" />
          <SkillList src={checkMarkIcon} skill="Express.js" />
            <SkillList src={checkMarkIcon} skill="JWT" />
            <SkillList src={checkMarkIcon} skill="Bcrypt.js" />
            <SkillList src={checkMarkIcon} skill="Multer" />
            <SkillList src={checkMarkIcon} skill="Helmet" />
        </div>
      </div>
      <hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

      <div className={styles.skillSection}>
  <h2 className={styles.sectionHeading}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="4" x2="8" y2="20" />
      <line x1="16" y1="4" x2="16" y2="20" />
      <line x1="4" y1="8" x2="8" y2="8" />
      <line x1="4" y1="16" x2="8" y2="16" />
    </svg>
    API Integration
  </h2>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="RESTful APIs" />
    <SkillList src={checkMarkIcon} skill="GraphQL" />
    <SkillList src={checkMarkIcon} skill="SOAP" />
    <SkillList src={checkMarkIcon} skill="gRPC" />
  </div>
</div>

<hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

<div className={styles.skillSection}>
  <h2 className={styles.sectionHeading}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 10l4.5 -4.5" />
      <path d="M14 10l-4.5 4.5" />
    </svg>
    Data Analysis & Visualization
  </h2>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="Pandas" />
    <SkillList src={checkMarkIcon} skill="NumPy" />
    <SkillList src={checkMarkIcon} skill="Matplotlib" />
    <SkillList src={checkMarkIcon} skill="Seaborn" />
    <SkillList src={checkMarkIcon} skill="Tableau" />
  </div>
</div>

<hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />

<div className={styles.skillSection}>
  <h2 className={styles.sectionHeading}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ai" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 15c3.5 -1 8 -1 12 0m-12 -5c3.5 -1 8 -1 12 0m-12 -5c3.5 -1 8 -1 12 0m-12 10c3.5 -1 8 -1 12 0" />
    </svg>
    Machine Learning
  </h2>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="TensorFlow" />
    <SkillList src={checkMarkIcon} skill="PyTorch" />
    <SkillList src={checkMarkIcon} skill="Scikit-learn" />
    <SkillList src={checkMarkIcon} skill="Keras" />
    <SkillList src={checkMarkIcon} skill="OpenCV" />
  </div>
</div>


<hr style={{ 
        width: '80%',
        height: '1px',
        border: 'none',
        backgroundColor: '#9B9B9B',
        margin: '30px auto'
      }} />



<div className={styles.skillSection}>
  <h2 className={styles.sectionHeading}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-translate" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11 5v14a1 1 0 0 0 2 0v-14a1 1 0 0 0 -2 0z" />
      <path d="M5 10h13l-3.5 -3.5m0 7l3.5 -3.5" />
      <path d="M17 15v1a1 1 0 0 1 -1 1h-10.5" />
    </svg>
    Languages I Speak *_*
  </h2>
  <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} skill="English" />
    <SkillList src={checkMarkIcon} skill={"हिंदी"} />
    <SkillList src={checkMarkIcon} skill={"मराठी"} />
  </div>
</div>

    </section>
  );
};

export default Skills;
