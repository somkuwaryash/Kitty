import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="mt-20 p-3 w-full flex h-auto pb-5 bg-white">
      <div className="flex w-full">
        <div className="flex flex-col justify-center w-1/2 pl-8">
          <span className="text-7xl font-bold text-yellow-400 ml-3 py-2">Crafting moments</span>
          <span className="text-7xl font-bold text-yellow-400 py-2 mb-8 ml-3">that last a lifetime</span>
          
          {/* Login Form */}
          <form className="flex flex-col mt-4 w-1/2 gap-4 ml-3">
            <label className="font-bold text-black">Email or phone</label>
            <input
              type="email||number"
              placeholder="email or phone"
              className="rounded-lg border p-2 text-black"
            />
            <label className="font-bold text-black">Password</label>
            <input
              type="password"
              placeholder="password"
              className="rounded-lg border p-2 text-black"
            />
            <Link href="#" className="text-orange-400 font-bold">
              Forgot password ?
            </Link>
            <button className="border p-2 text-white bg-yellow-500 rounded-lg">
              Sign in
            </button>
            <div className="w-full flex justify-center items-center gap-2 my-4">
              <div className="border border-black h-px w-1/4"></div>
              <span className="text-black">or</span>
              <div className="border border-black h-px w-1/4"></div>
            </div>
            <div className="flex flex-col ml-3">
              <p className="font-bold text-sm text-black mb-4">
                By clicking Continue, you agree to Kitty's{' '}
                <span className="text-orange-400">User Agreement, Privacy Policy</span>, and{' '}
                <span className="text-orange-400">Cookie Policy</span>
              </p>
              <div className="mt-4">
                <Link
                  href="#"
                  className="flex items-center justify-center border border-black p-2 rounded-lg font-bold text-black gap-1"
                >
                  <Image src="/download.png" alt="Google" width={20} height={20} />
                  Continue with Google
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center border border-black p-2 rounded-lg font-bold text-black gap-1 mt-2"
                >
                  New to Kitty? Join now
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image src="/Capture.PNG" alt="Capture" width={632} height={395} />
        </div>
      </div>
    </div>
  );
};

export default Login;
