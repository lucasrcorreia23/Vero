// Icons from lucide-react (shadcn/ui compatible)
import {
  Home as HomeIcon,
  PanelLeft,
  ArrowLeftRight,
  ArrowLeftToLine,
  Users,
  CreditCard,
  Coins,
  MoreVertical,
  ArrowDown,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  Building2,
  ArrowUpDown,
  Sparkles,
  ArrowDown as ArrowDownIcon,
  ArrowUp,
  ArrowLeftRight as ArrowLeftRightIcon,
  Clock,
  Check,
  ChevronRight,
  Shield,
} from 'lucide-react';

// Non-icon images from assets
import { getAssetUrl } from '../config/assets';
const imgUnion = getAssetUrl("Union.svg");
const imgSeparator = getAssetUrl("d6227ac8315906f615f05a1c1ba03d43d6df7524.svg");
const imgExclude = getAssetUrl("union-profile.svg");
const imgCardImage = getAssetUrl("card-image.png");
const imgYellowShield = getAssetUrl("yellow-shield.svg");
const imgYellowStar = getAssetUrl("yellow-start.png");
const imgStarSparkle = getAssetUrl("6e2852c819a76969f4e61b7bb27e59217c867561.svg");

import { useState, useEffect, useRef, useCallback } from 'react';
import EllipsisButton from './EllipsisButton';
import DropdownMenu from './DropdownMenu';
import SuccessToast from './SuccessToast';
import RejectSuccessToast from './RejectSuccessToast';
import ScheduleWarningToast from './ScheduleWarningToast';
import AddFundsSuccessToast from './AddFundsSuccessToast';
import Sidebar from './Sidebar';

export default function Home({ onViewRequestDetails, showSuccessToast, onCloseToast, showRejectToast, onCloseRejectToast, showScheduleToast, onCloseScheduleToast, scheduledDate, showAddFundsToast, onCloseAddFundsToast, isFromScheduleFlow, receivingCompany, showAddFundsPromptModal, onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const successToastRef = useRef(null);
  const rejectToastRef = useRef(null);
  const scheduleToastRef = useRef(null);
  const addFundsToastRef = useRef(null);
  const [isClosingSuccess, setIsClosingSuccess] = useState(false);
  const [isClosingReject, setIsClosingReject] = useState(false);
  const [isClosingSchedule, setIsClosingSchedule] = useState(false);
  const [isClosingAddFunds, setIsClosingAddFunds] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // Helper function to close toast with smooth animation
  const closeToastWithAnimation = (setIsClosing, onClose) => {
    // Use requestAnimationFrame to ensure smooth transition
    requestAnimationFrame(() => {
      setIsClosing(true);
      // Wait for animation to complete before removing from DOM
      setTimeout(() => {
        onClose();
        // Reset closing state after component unmounts
        setTimeout(() => setIsClosing(false), 50);
      }, 250); // Match animation duration
    });
  };

  // Reset closing states when toasts are shown (only if not already closing)
  useEffect(() => {
    if (showSuccessToast && !isClosingSuccess) {
      setIsClosingSuccess(false);
    }
  }, [showSuccessToast, isClosingSuccess]);

  useEffect(() => {
    if (showRejectToast && !isClosingReject) {
      setIsClosingReject(false);
    }
  }, [showRejectToast, isClosingReject]);

  useEffect(() => {
    if (showScheduleToast && !isClosingSchedule) {
      setIsClosingSchedule(false);
    }
  }, [showScheduleToast, isClosingSchedule]);

  useEffect(() => {
    if (showAddFundsToast && !isClosingAddFunds) {
      setIsClosingAddFunds(false);
    }
  }, [showAddFundsToast, isClosingAddFunds]);

  // Close toasts when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if click is outside each visible toast and close it with animation
      if (showSuccessToast && !isClosingSuccess && successToastRef.current && !successToastRef.current.contains(event.target)) {
        closeToastWithAnimation(setIsClosingSuccess, onCloseToast);
      }
      if (showRejectToast && !isClosingReject && rejectToastRef.current && !rejectToastRef.current.contains(event.target)) {
        closeToastWithAnimation(setIsClosingReject, onCloseRejectToast);
      }
      if (showScheduleToast && !isClosingSchedule && scheduleToastRef.current && !scheduleToastRef.current.contains(event.target)) {
        closeToastWithAnimation(setIsClosingSchedule, onCloseScheduleToast);
      }
      if (showAddFundsToast && !isClosingAddFunds && addFundsToastRef.current && !addFundsToastRef.current.contains(event.target)) {
        closeToastWithAnimation(setIsClosingAddFunds, onCloseAddFundsToast);
      }
    }

    const hasAnyToastVisible = showSuccessToast || showRejectToast || showScheduleToast || showAddFundsToast;
    
    if (hasAnyToastVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showSuccessToast, showRejectToast, showScheduleToast, showAddFundsToast, isClosingSuccess, isClosingReject, isClosingSchedule, isClosingAddFunds, onCloseToast, onCloseRejectToast, onCloseScheduleToast, onCloseAddFundsToast]);

  // Auto-hide success toast after 5 seconds
  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => {
        closeToastWithAnimation(setIsClosingSuccess, onCloseToast);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showSuccessToast, onCloseToast]);

  // Auto-hide reject toast after 5 seconds
  useEffect(() => {
    if (showRejectToast) {
      const timer = setTimeout(() => {
        closeToastWithAnimation(setIsClosingReject, onCloseRejectToast);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showRejectToast, onCloseRejectToast]);

  // Auto-hide schedule toast after 5 seconds
  useEffect(() => {
    if (showScheduleToast) {
      const timer = setTimeout(() => {
        closeToastWithAnimation(setIsClosingSchedule, onCloseScheduleToast);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showScheduleToast, onCloseScheduleToast]);

  // Auto-hide add funds toast after 5 seconds
  useEffect(() => {
    if (showAddFundsToast) {
      const timer = setTimeout(() => {
        closeToastWithAnimation(setIsClosingAddFunds, onCloseAddFundsToast);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAddFundsToast, onCloseAddFundsToast]);
  return (
    <div className="bg-white flex items-start relative w-full min-h-screen" data-name="Home" data-node-id="0:387">
      {/* Success Toast */}
      {showSuccessToast && (
        <div 
          ref={successToastRef} 
          className={`absolute right-[40px] bottom-[64px] z-50 w-[380px] max-w-[calc(100vw-128px)] ${isClosingSuccess ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
        >
          <SuccessToast onClose={onCloseToast} />
        </div>
      )}
      {/* Reject Success Toast */}
      {showRejectToast && (
        <div 
          ref={rejectToastRef} 
          className={`absolute right-[40px] bottom-[64px] z-50 w-[380px] max-w-[calc(100vw-128px)] ${isClosingReject ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
        >
          <RejectSuccessToast onClose={onCloseRejectToast} />
        </div>
      )}
      {/* Schedule Warning Toast */}
      {showScheduleToast && (
        <div 
          ref={scheduleToastRef} 
          className={`absolute right-[40px] bottom-[64px] z-50 w-[440px] max-w-[calc(100vw-128px)] ${isClosingSchedule ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
        >
          <ScheduleWarningToast onClose={onCloseScheduleToast} scheduledDate={scheduledDate} receivingCompany={receivingCompany} />
        </div>
      )}
      {/* Add Funds Success Toast */}
      {showAddFundsToast && (
        <div 
          ref={addFundsToastRef} 
          className={`absolute right-[40px] bottom-[64px] z-50 w-[380px] max-w-[calc(100vw-128px)] ${isClosingAddFunds ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
        >
          <AddFundsSuccessToast onClose={onCloseAddFundsToast} />
        </div>
      )}
      {/* Sidebar */}
      <Sidebar onLogout={onLogout} />
      
      {/* Main Content */}
      <div className="flex flex-col h-screen items-center relative shrink-0 flex-1" data-name="Container" data-node-id="0:469">
        {/* Header */}
        <div className="border-b  border-[#e5e5e5] relative shrink-0 w-full" data-name="Pro Blocks / Page Header / 5." data-node-id="0:470">
          <div className="box-border  flex flex-col gap-6 items-center overflow-clip px-6 py-4 relative rounded-[inherit] w-full">
            <div className=" w-full flex h-10 items-center justify-between relative shrink-0 w-full" data-name="Container" data-node-id="0:471">
              <div className="basis-0 flex flex-col gap-0 grow items-start min-h-px min-w-px relative shrink-0" data-name="Div" data-node-id="0:472">
                <p className="font-normal leading-none not-italic relative shrink-0 text-[#0a0a0a] text-lg w-full" data-node-id="0:473">
                  Hello, Marcos
                </p>
              </div>
              <div className="flex gap-2 items-center relative shrink-0" data-name="Flex" data-node-id="0:474">
                <button className="bg-transparent box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 hover:bg-gray-100 transition-colors" data-name="Button" data-node-id="0:475">
                  <div className="relative shrink-0 size-4" data-name="Icon / ArrowDown" data-node-id="0:476">
                    <ArrowDown className="size-full" />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#0a0a0a] text-sm text-nowrap" data-node-id="0:478">
                    <p className="leading-5 whitespace-pre">Add Funds</p>
                  </div>
                </button>
                <button className="bg-transparent box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 hover:bg-gray-100 transition-colors" data-name="Button" data-node-id="0:481">
                  <div className="relative shrink-0 size-4" data-name="Icon / ArrowDownLeft" data-node-id="0:482">
                    <ArrowDownLeft className="size-full" />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#0a0a0a] text-sm text-nowrap" data-node-id="0:484">
                    <p className="leading-5 whitespace-pre">Request Payment</p>
                  </div>
                </button>
                <button className=" text-white bg-[#171717] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shadow-sm shrink-0 hover:bg-[#2a2a2a] transition-colors" data-name="Button" data-node-id="0:487">
                  <div className="relative shrink-0 size-4 text-current" data-name="Icon / ArrowUpRight" data-node-id="0:488">
                    <ArrowUpRight className="size-full" />
                  </div>
                  <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#fafafa] text-sm text-nowrap" data-node-id="0:490">
                    <p className="leading-5 whitespace-pre">Send Payment</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="basis-0 box-border flex flex-col gap-2 grow items-start min-h-px min-w-px pb-0 pt-6 px-6 relative shrink-0 w-full overflow-y-auto" data-name="Container" data-node-id="0:493">
          <div className="flex flex-col lg:flex-row gap-[34px] items-start relative shrink-0 w-full" data-name="Dash" data-node-id="0:494">
            <div className="flex flex-col gap-[18px] items-start relative shrink-0 w-full lg:w-auto lg:flex-1" data-node-id="0:495">
              <div className="box-border flex flex-col gap-[18px] items-start relative w-full" data-node-id="0:496">
                {/* Total Assets Section */}
                <div className="flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Total Assets Info" data-node-id="10:328">
                  <div className="flex gap-[13px] items-center relative shrink-0 w-full" data-name="Total Assets Header" data-node-id="10:329">
                    <div className="flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Total Assets Text" data-node-id="10:330">
                      <p className="font-semibold leading-[36px] relative shrink-0 text-[30px] text-[#0a0a0a] w-full" data-node-id="10:331">
                        <span className="font-light">Your total assets are</span>
                        <span>{` $ 12.085.769,59`}</span>
                      </p>
                      <p className="font-normal leading-5 relative shrink-0 text-[#00a63e] text-sm w-full" data-node-id="10:332">
                        + 12.990 interest last 30 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 w-full">
                    <div className="flex-none rotate-[180deg] w-full">
                      <div className="h-[8px] bg-[#f5f5f5] overflow-clip relative rounded-full w-full " data-name="Progress" data-node-id="10:333">
                        <div className="absolute bg-[#525252] h-[8px] left-0 right-3/4 top-0 rounded-full" data-name="Track" data-node-id="10:334" />
                      </div>
                    </div>
                  </div>
                
                {/* Account Cards */}
                <div className="flex flex-col items-start relative shrink-0 w-full" data-node-id="0:503">
                  {/* Business Account */}
                  <div className="box-border flex gap-[14px] h-[108px] items-center justify-end overflow-clip px-0 py-6 relative shrink-0 w-full" data-name="Dashboard / Accounts / Card" data-node-id="10:336">
                    <div className="basis-0 flex gap-4 grow items-center min-h-px min-w-px relative shrink-0" data-name="Flex" data-node-id="10:337">
                      <div className="bg-[#d1d1d1] box-border flex gap-2 items-center justify-center p-2 relative rounded shadow-sm shrink-0 size-12" data-name="Icon Wrapper" data-node-id="10:338">
                        <div className="relative shrink-0 size-6" data-name="Icon / Wallet" data-node-id="10:339">
                          <Wallet className="size-full" />
                        </div>
                      </div>
                      <div className="flex gap-1.5 h-12 items-center relative shrink-0 flex-1 min-w-0" data-name="Card / Header" data-node-id="10:341">
                        <p className="font-normal leading-6 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-base text-[#0a0a0a] text-nowrap whitespace-pre" data-node-id="10:342">
                          Business Account
                        </p>
                        <div className="bg-[#f5f5f5] border border-transparent border-solid box-border flex gap-1 items-center justify-center px-2 py-0.5 relative rounded-lg shrink-0" data-name="Badge" data-node-id="10:343">
                          <p className="font-semibold leading-4 not-italic relative shrink-0 text-[#171717] text-xs text-nowrap whitespace-pre" data-node-id="I10:343;26:171">
                            Earning 2.5%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end relative shrink-0 w-[210px]" data-name="Account / Balance" data-node-id="10:346">
                      <div className="flex flex-col items-start relative shrink-0" data-name="Account / Balance / Description" data-node-id="10:347">
                        <p className="font-normal leading-4 not-italic relative shrink-0 text-[#737373] text-xs w-full" data-node-id="10:348">
                          Current Balance
                        </p>
                      </div>
                      <p className="font-bold leading-8 min-w-full not-italic relative shrink-0 text-[#0a0a0a] text-2xl text-right w-[min-content]" data-node-id="10:349">
                        $ 11.005.131,86
                      </p>
                      <p className="font-normal leading-5 not-italic relative shrink-0 text-[#00a63e] text-sm text-nowrap whitespace-pre" data-node-id="10:350">
                        + 12.990 interest last 30 days
                      </p>
                    </div>
                  </div>
                  
                  {/* Investment Account */}
                  <div className="border-t border-[#e5e5e5] h-[108px] relative shrink-0 w-full" data-name="Dashboard / Accounts / Card" data-node-id="10:351">
                    <div className="box-border flex gap-[14px] h-[108px] items-center justify-end overflow-clip px-0 py-6 relative rounded-[inherit] w-full">
                      <div className="basis-0 flex gap-4 grow items-center min-h-px min-w-px relative shrink-0" data-name="Flex" data-node-id="10:352">
                        <div className="bg-[#d1d1d1] box-border flex gap-2 items-center justify-center p-2 relative rounded shadow-sm shrink-0 size-12" data-name="Icon Wrapper" data-node-id="10:353">
                          <div className="relative shrink-0 size-6 text-neutral-900" data-name="Icon / Landmark" data-node-id="10:354">
                            <Building2 className="size-full" />
                          </div>
                        </div>
                        <div className="flex gap-1.5 h-12 items-center relative shrink-0 flex-1 min-w-0" data-name="Card / Header" data-node-id="10:356">
                          <p className="font-normal leading-6 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-base text-[#0a0a0a] text-nowrap whitespace-pre" data-node-id="10:357">
                            Investment Account
                          </p>
                          <div className="bg-[#f5f5f5] border border-transparent border-solid box-border flex gap-1 items-center justify-center px-2 py-0.5 relative rounded-lg shrink-0" data-name="Badge" data-node-id="10:358">
                            <p className="font-semibold leading-4 not-italic relative shrink-0 text-[#171717] text-xs text-nowrap whitespace-pre" data-node-id="I10:358;26:171">
                              Earning 4.5%
                            </p>
                          </div>
                        </div>
                      </div>
                      <button className="bg-[#f5f5f5] box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shadow-sm shrink-0 hover:bg-[#e5e5e5] transition-colors" data-name="Button" data-node-id="10:359">
                        <div className="relative shrink-0 size-4" data-name="Icon / ArrowDown" data-node-id="10:360">
                          <ArrowDownIcon className="size-full" />
                        </div>
                        <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#171717] text-sm text-nowrap" data-node-id="10:362">
                          <p className="leading-5 whitespace-pre">Add or Transfer Funds</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-[46.211px] bottom-[96px]" data-node-id="10:364">
                    <div className="bg-[#f5f5f5] border border-transparent border-solid box-border flex gap-1 h-6 items-center justify-center pl-3 pr-2 py-0.5 rounded-lg pointer-events-auto" data-name="Badge" data-node-id="10:365">
                      <div className="relative shrink-0 size-3" data-name="Icon / ArrowUpDown" data-node-id="10:366">
                        <ArrowUpDown className="size-full" />
                      </div>
                      <p className="font-semibold leading-4 not-italic relative shrink-0 text-xs text-[#171717] text-nowrap whitespace-pre" data-node-id="10:368">
                        &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            {/* News Card */}
            <div className="flex flex-col gap-8 items-start relative shrink-0 w-full lg:w-[290px] lg:flex-shrink-0 h-[316px]" data-name="News Container" data-node-id="10:369">
              <div className="basis-0 border border-[#e5e5e5] border-solid grow min-h-px min-w-px relative rounded-xl shrink-0 w-full" data-name="Pro Blocks / Card / 6." data-node-id="10:370">
                <div className="flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-2 items-center relative size-full" data-name="News Card" data-node-id="13:2373">
                    <div className="box-border content-stretch flex flex-col gap-4 h-full items-start p-6 relative shrink-0 w-[290px]" data-name="CardHeader" data-node-id="13:2374">
                      <div className="relative shrink-0 size-6" data-name="9310112_star_sparkle_icon 1" data-node-id="13:2375">
                        <img alt="" className="block max-w-none size-full" src={imgStarSparkle} />
                      </div>
                      <p className="font-semibold h-12 leading-6 not-italic relative shrink-0 text-[#0a0a0a] text-base w-full" data-node-id="13:2377">
                        Budget deal averts shutdown, easing political gridlock
                      </p>
                      <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-node-id="28:559">
                        <p className="font-normal h-[143px] leading-5 not-italic overflow-hidden relative shrink-0 text-sm text-[#737373] w-full line-clamp-[7]" data-node-id="13:2378">
                          After days of tense negotiations, lawmakers reached a last-minute agreement to extend government funding and keep agencies open while a longer-term budget is debated. The compromise cools partisan friction for now, with leaders pledging to resume talks on spending caps and deficit measures. Markets reacted with cautious relief as policy uncertainty briefly receded.
                        </p>
                        <div className="content-stretch flex flex-col gap-2 items-center justify-center relative shrink-0" data-node-id="28:563">                        
                          <button className="bg-transparent box-border content-stretch flex gap-[10px] items-center justify-center relative rounded-md shrink-0  transition-colors cursor-pointer" data-name="Button" data-node-id="28:560">
                            <p className="font-medium leading-6 hover:text-zinc-700 transition-colors not-italic relative shrink-0 text-sm text-[#171717] text-nowrap whitespace-pre" data-node-id="I28:560;11:661">
                              Read more
                            </p>
                          
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Transactions Table */}
          <div className="flex flex-col items-start min-w-[356px] relative shrink-0 w-full mt-2" data-name="Table" data-node-id="0:545">
            <div className="box-border flex gap-[14px] items-center min-h-[54px] px-0 py-2 relative shrink-0 w-full" data-name="_Card / Header" data-node-id="0:546">
              <div className="flex flex-col gap-1.5 items-start relative shrink-0" data-name="Text Wrapper" data-node-id="0:547">
                <p className="font-normal leading-none not-italic relative shrink-0 text-[#0a0a0a] text-xl text-nowrap whitespace-pre" data-node-id="0:548">
                  Recent Transactions
                </p>
              </div>
            </div>
            <div className="box-border flex flex-col items-start min-w-[356px] pb-0 pt-0 px-0 relative shrink-0 w-full" data-name="Transactions" data-node-id="0:549">
              <div className="border border-[#e5e5e5] border-solid h-[268px] relative rounded-lg shrink-0 w-full overflow-visible" data-name="Table" data-node-id="0:550">
                <div className="flex h-[268px] items-start overflow-visible relative rounded-[inherit] w-full overflow-x-auto">
                  {/* Type Column */}
                  <div className="flex flex-col items-start overflow-clip relative shrink-0 min-w-[200px] flex-1" data-name="Column" data-node-id="0:551">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center relative shrink-0 w-full" data-name="Data Table / TableHead" data-node-id="0:552">
                      <div className="bg-transparent box-border flex gap-2 h-9 items-center justify-center px-4 py-2 relative rounded-lg shrink-0" data-name="Button" data-node-id="0:553">
                        <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#737373] text-sm text-nowrap" data-node-id="0:556">
                          <p className="leading-5 whitespace-pre">Type</p>
                        </div>
                      </div>
                    </div>
                    {/* Transaction rows for Type column */}
                    {[
                      { Icon: ArrowDown, color: "#dc2626", text: "Outflow" },
                      { Icon: ArrowUp, color: "#41d975", text: "Inflow" },
                      { Icon: ArrowDown, color: "#dc2626", text: "Outflow" },
                      { Icon: ArrowLeftRightIcon, color: "#737373", text: "Transfer" },
                    ].map((item, idx) => (
                      <div key={idx} className="border-b border-[#e5e5e5] box-border flex gap-2 h-[57px] items-center min-w-[85px] p-2 relative shrink-0 w-full" data-name="Table / Cell" data-node-id={`0:${560 + idx}`}>
                        <div className="overflow-clip relative shrink-0 size-6" data-name="Arrow Icon" data-node-id={`0:${561 + idx}`}>
                          <item.Icon className="size-full" style={{ color: item.color }} />
                        </div>
                        <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Wrapper">
                          <div className="flex flex-col font-medium justify-center leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0a0a0a] text-sm text-nowrap w-full">
                            <p className="leading-5 overflow-ellipsis overflow-hidden text-sm">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Counterparty Column */}
                  <div className="flex flex-col items-start overflow-clip relative shrink-0 min-w-[200px] flex-1" data-name="Column" data-node-id="0:594">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center min-w-[85px] px-2 py-0 relative shrink-0 w-full" data-name="Table / Head" data-node-id="0:595">
                      <div className="basis-0 flex flex-col font-medium grow h-full justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#737373] text-sm" data-node-id="0:596">
                        <p className="leading-5">{`Counterparty `}</p>
                      </div>
                    </div>
                    {[
                      "marcoswbd@gmail.com",
                      { name: "ACME Corp", email: "acme@company.com", hasIcon: true },
                      "ACME - WFBIUS6S",
                      "Business Account",
                    ].map((item, idx) => (
                      <div key={idx} className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-[57px] items-center min-w-[85px] p-2 relative shrink-0 w-full" data-name="Table / Cell">
                        {typeof item === "string" ? (
                          <div className="basis-0 flex flex-col font-normal grow justify-center leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0a0a0a] text-sm text-nowrap">
                            <p className="leading-5 overflow-ellipsis overflow-hidden text-sm">{item}</p>
                          </div>
                        ) : (
                          <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                            <div className="flex gap-1 items-center relative shrink-0">
                              <p className="font-medium leading-5 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap whitespace-pre">
                                {item.name}
                              </p>
                              {item.hasIcon && (
                                <div className="overflow-clip relative shrink-0 size-4" data-name="Icon / Shield">
                                  <Shield className="size-full" />
                                </div>
                              )}
                            </div>
                            <p className="font-normal leading-4 min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-xs text-[#737373] text-nowrap w-[min-content]">
                              {item.email}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Date Column */}
                  <div className="flex flex-col items-start overflow-clip relative shrink-0 min-w-[120px]" data-name="Column" data-node-id="0:615">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center min-w-[85px] px-2 py-0 relative shrink-0 w-full" data-name="Table / Head" data-node-id="0:616">
                      <div className="basis-0 flex flex-col font-medium grow h-full justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#737373] text-sm" data-node-id="0:617">
                        <p className="leading-5">Date</p>
                      </div>
                    </div>
                    {Array(4).fill("12 Out 2024").map((date, idx) => (
                      <div key={idx} className="border-b border-[#e5e5e5] box-border flex gap-2 h-[57px] items-center min-w-[85px] p-2 relative shrink-0 w-full" data-name="Table / Cell">
                        <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Wrapper">
                          <div className="flex flex-col font-medium justify-center leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0a0a0a] text-sm text-nowrap w-full">
                            <p className="leading-5 overflow-ellipsis overflow-hidden text-sm">{date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Status Column */}
                  <div className="flex flex-col items-start overflow-clip relative shrink-0 min-w-[150px] flex-1" data-name="Column" data-node-id="0:653">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center min-w-[85px] px-2 py-0 relative shrink-0 w-full" data-name="Table / Head" data-node-id="0:654">
                      <div className="basis-0 flex flex-col font-medium grow h-full justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#737373] text-sm" data-node-id="0:655">
                        <p className="leading-5">Status</p>
                      </div>
                    </div>
                    {[
                      { Icon: Clock, text: "Awaiting acceptance" },
                      { Icon: Check, text: "Settled" },
                      { Icon: Check, text: "Settled" },
                      { Icon: Clock, text: "Processing" },
                    ].map((status, idx) => (
                      <div key={idx} className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-[57px] items-center min-w-[85px] p-2 relative shrink-0 w-full" data-name="Table / Cell">
                        <div className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 items-center justify-center px-2 py-0.5 relative rounded-lg shrink-0" data-name="Badge">
                          <div className="relative shrink-0 size-3" data-name="Icon">
                            <status.Icon className="size-full" />
                          </div>
                          <p className="font-semibold leading-4 not-italic relative shrink-0 text-[#0a0a0a] text-xs text-nowrap whitespace-pre">
                            {status.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Amount Column */}
                  <div className="flex flex-col items-start overflow-clip relative shrink-0 min-w-[140px]" data-name="Column" data-node-id="0:705">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center min-w-[85px] px-2 py-0 relative shrink-0 w-full" data-name="Table / Head" data-node-id="0:706">
                      <div className="basis-0 flex flex-col font-medium grow h-full justify-center leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#737373] text-sm text-right" data-node-id="0:707">
                        <p className="leading-5">Amount</p>
                      </div>
                    </div>
                    {[
                      { amount: "-R$ 4.024,92", color: "#f87171" },
                      { amount: "+R$ 124.024,92", color: "#25af57" },
                      { amount: "R$ 4.024,92", color: "#0a0a0a" },
                      { amount: "R$ 124.024,92", color: "#0a0a0a" },
                    ].map((item, idx) => (
                      <div key={idx} className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-[57px] items-center min-w-[85px] p-2 relative shrink-0 w-full" data-name="Table / Cell">
                        <div className="basis-0 flex flex-col font-normal grow justify-center leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-nowrap text-right" style={{ color: item.color }}>
                          <p className="leading-5 overflow-ellipsis overflow-hidden text-sm">{item.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions Column */}
                  <div className="flex flex-col items-start overflow-visible relative shrink-0 min-w-[100px]" data-name="Column" data-node-id="0:716">
                    <div className="border-b border-[#e5e5e5] box-border flex gap-[10px] h-10 items-center min-w-[85px] px-2 py-0 shrink-0 w-full" data-name="Table / Head" data-node-id="0:717" />
                    {Array(4).fill(null).map((_, idx) => {
                      // First row (idx 0) has "Awaiting acceptance" status - show dropdown menu
                      const isAwaitingAcceptance = idx === 0;
                      
                      return (
                        <div key={idx} className="border-b border-[#e5e5e5] box-border flex h-[57px] items-center  min-w-[85px] p-2 relative shrink-0 w-full justify-center" data-name="Table / Cell">
                          {isAwaitingAcceptance ? (
                            <div className="relative" ref={dropdownRef}>
                              <EllipsisButton 
                                onClick={() => setShowDropdown(!showDropdown)} 
                              />
                              {showDropdown && (
                                <div className="absolute top-10 right-0 z-50">
                                  <DropdownMenu 
                                    onViewRequestDetails={onViewRequestDetails}
                                    onClose={() => setShowDropdown(false)}
                                  />
                                </div>
                              )}
                            </div>
                          ) : (
                            <button className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-2 items-center justify-center px-4 py-2 relative rounded-lg shrink-0 size-9 hover:bg-gray-50 transition-colors" data-name="Button">
                              <div className="relative shrink-0 size-4" data-name="Icon / EllipsisVertical">
                                <MoreVertical className="size-full" />
                              </div>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border flex gap-[14px] items-center pb-0 pt-2 px-0 relative shrink-0 w-full" data-name="_Table / Button" data-node-id="0:735">
              <button className="bg-transparent box-border flex gap-2 h-9 items-center justify-centerrelative rounded-lg shrink-0" data-name="Button" data-node-id="0:736">
                <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#171717] text-sm text-nowrap" data-node-id="0:739">
                  <p className="leading-5 whitespace-pre hover:text-zinc-700 transition-colors">See all transactions</p>
                </div>
                <div className="relative shrink-0 size-4" data-name="Icon / ArrowUpRight" data-node-id="0:740">
                  <ArrowUpRight className="size-full" />
                </div>
              </button>
            </div>
          </div>
          
          {/* Promotional Cards */}
          <div className="box-border pb-10 flex flex-col lg:flex-row gap-6 items-stretch pb-0 pt-2 px-0 relative shrink-0 w-full mt-2" data-node-id="0:742">
            {/* Vero Card */}
            <div className="basis-0 bg-white border border-[#e5e5e5] border-solid grow min-h-px min-w-px relative rounded-xl shrink-0 w-full lg:w-auto h-full" data-name="Pro Blocks / Bento Card / 4." data-node-id="0:743">
              <div className="flex items-start overflow-clip relative rounded-[inherit] w-full h-full">
                <div className="basis-0 box-border flex flex-col gap-2 grow items-start min-h-px min-w-px p-6 relative self-stretch shrink-0 min-w-0" data-name="Flex Vertical" data-node-id="0:744">
                  <p className="font-semibold leading-7 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-lg text-[#0a0a0a] whitespace-nowrap w-full" data-node-id="0:745">
                    Create your Vero Card
                  </p>
                  <p className="font-normal leading-5 not-italic relative shrink-0 text-[#737373] text-sm w-full overflow-ellipsis overflow-hidden line-clamp-2" data-node-id="0:746">
                    Order Physical cards with expedited shipping or create unlimited virtual cards in seconds
                  </p>
                  <button className="bg-transparent box-border flex gap-2 h-9 items-center justify-center  relative rounded-lg shrink-0" data-name="Button" data-node-id="0:747">
                    <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#171717] text-sm text-nowrap" data-node-id="0:748">
                      <p className="leading-5 whitespace-pre hover:text-zinc-700 transition-colors">Let me know</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col items-end justify-end overflow-clip relative self-stretch shrink-0" data-name="Image" data-node-id="0:749">
                  <div className="h-[102px] relative shrink-0 w-[217px]" data-name="Card Image" data-node-id="0:750">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Verified Business Card */}
            <div className="basis-0 bg-white border border-[#e5e5e5] border-solid grow min-h-px min-w-px relative rounded-xl shrink-0 w-full lg:w-auto h-full" data-name="Pro Blocks / Bento Card / 4." data-node-id="0:751">
              <div className="flex items-start overflow-clip relative rounded-[inherit] w-full h-full">
                <div className="basis-0 box-border flex flex-col gap-2 grow items-start min-h-px min-w-px p-6 relative self-stretch shrink-0 min-w-0" data-name="Flex Vertical" data-node-id="0:752">
                  <p className="font-semibold leading-7 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-lg text-[#0a0a0a] whitespace-nowrap w-full" data-node-id="0:753">
                    Be recognized as a Verified Business
                  </p>
                  <p className="font-normal leading-5 not-italic relative shrink-0 text-[#737373] text-sm w-full overflow-ellipsis overflow-hidden line-clamp-2" data-node-id="0:754">
                    Verify once to speed up withdrawals and display your Verified status to partners.
                  </p>
                  <button className="bg-transparent box-border flex gap-2 h-9 items-center justify-center  relative rounded-lg shrink-0  transition-colors" data-name="Button" data-node-id="0:755">
                    <div className="flex flex-col font-medium justify-center leading-none not-italic relative shrink-0 text-[#171717] text-sm text-nowrap" data-node-id="0:756">
                      <p className="leading-5 whitespace-pre hover:text-zinc-700 transition-colors">Verify My Business</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center overflow-clip relative self-stretch shrink-0 w-[160px]" data-name="Image" data-node-id="0:757">
                  <div className="h-full w-full relative shrink-0" data-name="Exclude" data-node-id="0:758">
                    <img alt="" className="block max-w-none h-full w-full object-contain" src={imgYellowShield} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

