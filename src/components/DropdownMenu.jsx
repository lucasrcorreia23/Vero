// Image assets from Figma - using centralized asset configuration
import { getAssetUrl } from '../config/assets';

const imgLine1 = getAssetUrl("6697338215aaaf5634a7882fd2bc8b97f2136a37.svg");

function SectionItems({ className }) {
  return (
    <div className={className} data-name="type=divider" data-node-id="7:534">
      <div className="h-0 relative shrink-0 w-[246px]" data-node-id="7:535">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={imgLine1} />
        </div>
      </div>
    </div>
  );
}

export default function DropdownMenu({ onViewRequestDetails, onClose }) {
  const handleViewDetails = () => {
    if (onViewRequestDetails) {
      onViewRequestDetails()
    }
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="border border-slate-100 border-solid relative rounded-[8px] bg-white w-[184px] overflow-visible" data-name="dropdown menu" data-node-id="7:5103">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <SectionItems className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[224px]" />
        <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start p-[5px] relative shrink-0 w-full" data-name="Section" data-node-id="I7:5103;7:587">
          <div 
            className="bg-white box-border content-stretch flex gap-[8px] items-center p-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer" 
            data-name="menu item" 
            data-node-id="I7:5103;7:588"
            onClick={handleViewDetails}
          >
            <p className="basis-0 font-medium grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[#171717]">
             Open Payment Request
            </p>
          </div>
          <button className="bg-white box-border content-stretch cursor-pointer flex gap-[8px] items-center p-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors" data-name="menu item" data-node-id="I7:5103;7:590">
            <p className="basis-0 font-medium grow text-left leading-none min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[#171717]">
              Download Request
            </p>
          </button>
          <button className="bg-white box-border content-stretch cursor-pointer flex gap-[8px] items-center p-[8px] relative shrink-0 w-full hover:bg-gray-50 transition-colors" data-name="menu item" data-node-id="I7:5103;7:591">
            <p className="basis-0 font-medium text-left grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[#171717]">
              Report an issue
            </p>
          </button>
        </div>
        <SectionItems className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[224px]" />
        <SectionItems className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[224px]" />
      </div>
    </div>
  );
}

