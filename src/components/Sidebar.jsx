// Icons from lucide-react (shadcn/ui compatible)
import {
  PanelLeft,
  Home as HomeIcon,
  ArrowLeftRight,
  ArrowLeftToLine,
  Users,
  CreditCard,
  Coins,
  MoreVertical,
} from 'lucide-react';

// Non-icon images from assets
import { getAssetUrl } from '../config/assets';
const imgUnion = getAssetUrl("Union.svg");
const imgSeparator = getAssetUrl("d6227ac8315906f615f05a1c1ba03d43d6df7524.svg");
const imgExclude = getAssetUrl("union-profile.svg");

export default function Sidebar() {
  return (
    <div className="bg-[#fafafa] flex flex-col h-screen items-start relative shrink-0 w-[256px]" data-name="Sidebar Vero" data-node-id="0:388">
      <div className="bg-[#fafafa] box-border flex flex-col gap-2 items-start pl-[13px] pr-2 py-2 relative shrink-0 w-full" data-name="SidebarHeader" data-node-id="0:389">
        <div className="box-border flex gap-2 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:390">
          <div className="h-4 relative shrink-0 w-[16.626px]" data-name="Union" data-node-id="0:391">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(10, 10, 10, 1)" }}>
              <img alt="" className="block max-w-none size-full" src={imgUnion} />
            </div>
          </div>
          <div className="basis-0 grow h-[14px] min-h-px min-w-px shrink-0" data-name="Flex Vertical" data-node-id="0:398" />
          <div className="relative shrink-0 size-4" data-name="Icon / PanelLeftDashed" data-node-id="0:399">
            <PanelLeft className="size-full" />
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[256px]" data-name="Separator" data-node-id="0:401">
        <img alt="" className="block max-w-none size-full" src={imgSeparator} />
      </div>
      <div className="basis-0 flex flex-col gap-2 grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="SidebarContent" data-node-id="0:403">
        <div className="basis-0 box-border flex flex-col grow items-start min-h-px min-w-px p-2 relative shrink-0 w-full" data-name="Sidebar / SidebarGroup" data-node-id="0:404">
          <div className="flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="SidebarMenu" data-node-id="0:405">
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:406">
              <div className="bg-[#f5f5f5] box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:407">
                <div className="relative shrink-0 size-4" data-name="Icon / Home" data-node-id="0:408">
                  <HomeIcon className="size-full" />
                </div>
                <p className="basis-0 font-medium grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#171717] text-nowrap" data-node-id="0:410">
                  Home
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:425">
              <div className="box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:426">
                <div className="relative shrink-0 size-4" data-name="Icon / ArrowRightLeft" data-node-id="0:427">
                  <ArrowLeftRight className="size-full" />
                </div>
                <p className="basis-0 font-normal grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap" data-node-id="0:429">
                  Transactions
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:430">
              <div className="box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:431">
                <div className="relative shrink-0 size-4" data-name="Icon / ArrowLeftToLine" data-node-id="0:432">
                  <ArrowLeftToLine className="size-full" />
                </div>
                <p className="basis-0 font-normal grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap" data-node-id="0:434">
                  Requests
                </p>
                <div className="absolute box-border flex gap-2 h-5 items-center justify-center px-1 py-0 right-1 top-[6px]" data-name="Sidebar Badge" data-node-id="0:435">
                  <p className="font-medium leading-4 not-italic relative shrink-0 text-[#0a0a0a] text-xs text-nowrap whitespace-pre" data-node-id="0:436">
                    23
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:437">
              <div className="box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:438">
                <div className="relative shrink-0 size-4" data-name="Icon / Users" data-node-id="0:439">
                  <Users className="size-full" />
                </div>
                <p className="basis-0 font-normal grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap" data-node-id="0:441">
                  Contacts
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:442">
              <div className="box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:443">
                <div className="relative shrink-0 size-4" data-name="Icon / CreditCard" data-node-id="0:444">
                  <CreditCard className="size-full" />
                </div>
                <p className="basis-0 font-normal grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#a3a3a3] text-nowrap" data-node-id="0:446">
                  Cards
                </p>
                <div className="absolute box-border flex gap-2 h-5 items-center justify-center px-1 py-0 right-1 top-[6px]" data-name="Sidebar Badge" data-node-id="0:447">
                  <p className="font-medium leading-4 not-italic relative shrink-0 text-[#a3a3a3] text-xs text-nowrap whitespace-pre" data-node-id="0:448">
                    Soon
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative shrink-0 w-full" data-name="Sidebar / SidebarMenuItem" data-node-id="0:449">
              <div className="box-border flex gap-2 h-8 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:450">
                <div className="relative shrink-0 size-4" data-name="Icon / HandCoins" data-node-id="0:451">
                  <Coins className="size-full" />
                </div>
                <p className="basis-0 font-normal grow leading-none min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#a3a3a3] text-nowrap" data-node-id="0:453">
                  Investments
                </p>
                <div className="absolute box-border flex gap-2 h-5 items-center justify-center px-1 py-0 right-1 top-[6px]" data-name="Sidebar Badge" data-node-id="0:454">
                  <p className="font-medium leading-4 not-italic relative shrink-0 text-[#a3a3a3] text-xs text-nowrap whitespace-pre" data-node-id="0:455">
                    Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] box-border flex flex-col gap-2 items-start p-2 relative shrink-0 w-[256px]" data-name="SidebarFooter" data-node-id="0:456">
          <div className="box-border flex gap-2 items-center p-2 relative rounded-lg shrink-0 w-full" data-name="Sidebar / SidebarMenuButton" data-node-id="0:457">
            <div className="basis-0 flex flex-col gap-0.5 grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Flex Vertical" data-node-id="0:458">
              <div className="flex gap-6 items-center relative shrink-0 w-full" data-node-id="0:459">
                <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Flex Vertical" data-node-id="0:460">
                  <div className="flex gap-1 items-center relative shrink-0 w-full" data-node-id="0:461">
                    <p className="font-medium leading-5 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-sm text-[#0a0a0a] text-nowrap whitespace-pre" data-node-id="0:462">
                      Infinity Base SA
                    </p>
                    <div className="h-[14.585px] relative shrink-0 w-[11.917px]" data-name="Exclude" data-node-id="0:463">
                      <img alt="" className="block max-w-none size-full" src={imgExclude} />
                    </div>
                  </div>
                  <p className="font-normal leading-4 not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-xs text-[#737373] text-nowrap w-full" data-node-id="0:466">
                    acme@company.com
                  </p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-4" data-name="Icon / EllipsisVertical" data-node-id="0:467">
              <MoreVertical className="size-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

