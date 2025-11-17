// Icons from lucide-react (shadcn/ui compatible)
import { useState } from 'react';

// Non-icon images from assets
import { getAssetUrl } from '../config/assets';
const imgTransferir1 = getAssetUrl("036d9b40d94c3f9de91df9a5e0b30ec6b0f308b2.svg");
const imgLine2 = getAssetUrl("155a386e3a62c45a9d5c1b97a757d0fbb3449c35.svg");
const imgApple = getAssetUrl("fbd898e3f7e565395870c6486ab473952e8a9309.svg");

export default function Login({ onContinue }) {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <div className="bg-white flex isolate items-start relative w-full h-screen" data-name="Login" data-node-id="45:2045">
      {/* Left Banner */}
      <div className="basis-0 bg-neutral-950 flex flex-col gap-2 grow h-full items-center justify-center min-h-px min-w-px relative shrink-0 z-[2]" data-name="Banner" data-node-id="45:2745">
        <div className="h-16 relative shrink-0 w-[219px]" data-name="transferir 1" data-node-id="45:2776">
          <img alt="" className="block max-w-none size-full" src={imgTransferir1} />
        </div>
      </div>

      {/* Right Login Form */}
      <div className="basis-0 bg-white flex flex-col gap-2 grow h-full items-center justify-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Login" data-node-id="45:2754">
        <div className="flex flex-col gap-2 items-start relative shrink-0" data-name="Container" data-node-id="45:2800">
          <div className="flex flex-col gap-6 items-start justify-center relative shrink-0" data-name="Container" data-node-id="45:2786">
            {/* Title Section */}
            <div className="flex flex-col gap-2 items-start justify-center not-italic relative shrink-0 text-nowrap w-full whitespace-pre" data-name="Title" data-node-id="45:2842">
              <p className="font-medium leading-8 relative shrink-0 text-2xl text-[#171717] tracking-[-0.144px]" data-node-id="45:2843">
                Create an account
              </p>
              <p className="font-normal leading-5 relative shrink-0 text-sm text-black" data-node-id="45:2866">
                Be among the first to experience the future of cross-border payments
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Container" data-node-id="45:2799">
              {/* Email Input */}
              <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="E-mail input" data-node-id="45:2787">
                <p className="font-medium h-[14px] leading-none not-italic relative shrink-0 text-sm text-[#0a0a0a] w-full" data-node-id="45:2788">
                  Email
                </p>
                <div className="bg-white border border-[#e5e5e5] border-solid h-9 relative rounded-md shrink-0 w-full" data-name="Input Login" data-node-id="45:2789">
                  <div className="box-border flex h-9 items-center overflow-clip px-3 py-2 relative rounded-[inherit] w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Insert your email"
                      className="font-medium leading-[14px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#737373] text-nowrap whitespace-pre bg-transparent border-none outline-none w-full"
                      data-node-id="45:2790"
                    />
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="bg-[#171717] box-border flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-[6px] shrink-0 w-full hover:bg-[#2a2a2a] transition-colors"
                data-name="type=default, state=Default"
                data-node-id="11:640"
              >
                <p className="font-medium leading-6 not-italic relative shrink-0 text-sm text-white text-nowrap whitespace-pre" data-node-id="11:641">
                  Continue
                </p>
              </button>
            </div>
          </div>

          {/* Or Continue With Section */}
          <div className="flex flex-col gap-2 items-start relative shrink-0 w-full" data-name="Container" data-node-id="45:2859">
            <div className="box-border flex gap-2 items-center justify-center px-0 py-2 relative shrink-0 w-full" data-name="Or Continue With" data-node-id="45:2848">
              <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                  <div className="h-0 relative w-full" data-node-id="45:2849">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-normal justify-center leading-none not-italic relative shrink-0 text-sm text-[#a3a3a3] text-center text-nowrap" data-node-id="45:2850">
                <p className="leading-6 whitespace-pre">Or</p>
              </div>
              <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                  <div className="h-0 relative w-full" data-node-id="45:2851">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <img alt="" className="block max-w-none size-full" src={imgLine2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Login Button */}
            <div className="bg-white border border-[#e5e5e5] border-solid box-border flex flex-col gap-2 h-10 items-center justify-center px-[125px] py-0 relative rounded-lg shadow-sm shrink-0 w-full" data-name="Continue with Apple / Centre / Fixed" data-node-id="45:2860">
              <div className="bg-white box-border flex gap-[15px] items-center justify-center p-2 relative rounded-[10px] shrink-0" data-name="Apple Button" data-node-id="45:2861">
                <div className="h-5 overflow-clip relative shrink-0 w-4" data-name="Apple Icon" data-node-id="45:2862">
                  <div className="absolute bottom-[5%] left-0 right-[6.25%] top-0" data-name="" data-node-id="I45:2862;27:4834">
                    <div className="absolute inset-0">
                      <img alt="" className="block max-w-none size-full" src={imgApple} />
                    </div>
                  </div>
                </div>
                <p className="font-medium leading-5 not-italic relative shrink-0 text-[#171717] text-sm text-nowrap tracking-normal whitespace-pre" data-node-id="45:2863">
                  Login with Apple
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

