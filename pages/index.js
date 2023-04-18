import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

const Home = ({ data }) => {
  // const serverData = JSON.parse(data);
  return (
    <div className="home">
      <h1>What Can I Deploy to Static Apps? v2</h1>
      <h1>
        Welcome to{' '}
        {/* <a href="https://nextjs.org">Next.js! The time is {serverData.time}</a> */}
      </h1>
      <div className="card-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.id];
          return (
            <SmallCard
              key={project.id}
              Icon={Icon}
              title={project.name}
              slug={project.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const data = JSON.stringify({ time: new Date() });
//   return { props: { data } };
// }
