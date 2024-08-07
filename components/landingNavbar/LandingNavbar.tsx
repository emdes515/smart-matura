import Image from 'next/image';

const LandingNavbar: React.FC = () => {
  return (
    <div className="m-5">
      <div className="navbar bg-base-100 ">
        <a className="btn btn-ghost relative w-52">
          <Image
            src="/logo_text.png"
            alt="logo"
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </a>
      </div>
    </div>
  );
};

export default LandingNavbar;
