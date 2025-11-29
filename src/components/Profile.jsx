import { MapPin, Eye, ExternalLink } from "lucide-react";
import profilJpeg from "../assets/Profil.jpg";

const Chip = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-sm 
    bg-[#fcee0a]/20 text-[#fcee0a] 
    border border-[#fcee0a]/40">
    {children}
  </span>
);

const Profile = ({ profile }) => {
  const photo = profilJpeg ?? profile?.photo_url;

  if (!profile)
    return (
      <Card>
        <p className="text-center text-gray-300">No profile data found.</p>
      </Card>
    );

  return (
    <Card>
      <div className="flex gap-6 items-start">

        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#fcee0a]/40 shadow-[0_0_15px_#fcee0a55] flex-shrink-0">
          <img
            src={photo}
            alt={profile.full_name}
            className="w-full h-full object-cover object-top rounded-full"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#00eaff]">
            {profile.full_name}
          </h1>

          <p className="text-gray-300 mb-3">{profile.headline}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            <Chip>{profile.nim}</Chip>
            <Chip>{profile.prodi}</Chip>
            <Chip>Angkatan {profile.angkatan}</Chip>
          </div>

          <div className="flex gap-4 text-sm text-gray-400 mb-3">
            <Info icon={MapPin} label={profile.location} />
            <Info icon={Eye} label="127 views" />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {profile.short_bio}
          </p>

          {profile.portfolio_url && (
            <a
              href={profile.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 
                bg-[#00eaff]/20 text-[#00eaff] border border-[#00eaff]/40
                px-4 py-2 rounded-lg hover:bg-[#00eaff]/30 transition
                shadow-[0_0_10px_#00eaff80]"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Portfolio
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

const Info = ({ icon: Icon, label }) => (
  <span className="flex items-center gap-1">
    <Icon className="w-4 h-4 text-[#fcee0a]" />
    {label}
  </span>
);

const Card = ({ children }) => (
  <div className="bg-[#0d0d0d] p-6 rounded-xl border border-[#fcee0a]/40 shadow-[0_0_20px_#fcee0a55] mb-6">
    {children}
  </div>
);

export default Profile;
