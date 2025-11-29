import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import studentData from './dataMahasiswa.json';

function App() {
  return (
   <div className="min-h-screen bg-[#0d2931] text-gray-100">
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
        <Profile profile={studentData.profile} />
        <Skills skills={studentData.skills} />
        <Experiences experiences={studentData.experiences} />
      </main>
    </div>
  );
}

export default App;
