import { BicepsFlexed, Brain, Globe, User } from "lucide-react";
import { WarningButton } from "./WarningButton";

export const TopicsChoice = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-[20px]">
      <div className="flex justify-center gap-[13px] flex-wrap">
        <button className="bg-topics-general w-[124px] flex flex-col hover:bg-opacity-70 transition-all items-center justify-center h-[124px] rounded-[15px]">
          <div className="flex flex-col items-center justify-center gap-[13px]">
            <Brain className="w-[48px] h-[48px] text-neutral-white" />
            <h3 className="text-neutral-white text-[13px] font-medium">
              Geral
            </h3>
          </div>
        </button>
        <button className="bg-topics-sports w-[124px] flex flex-col hover:bg-opacity-70 transition-all items-center justify-center h-[124px] rounded-[15px]">
          <div className="flex flex-col items-center justify-center gap-[13px]">
            <BicepsFlexed className="w-[48px] h-[48px] text-neutral-white" />
            <h3 className="text-neutral-white text-[13px] font-medium">
              Esportes
            </h3>
          </div>
        </button>
        <button className="bg-topics-geography w-[124px] flex flex-col hover:bg-opacity-70 transition-all items-center justify-center h-[124px] rounded-[15px]">
          <div className="flex flex-col items-center justify-center gap-[13px]">
            <Globe className="w-[48px] h-[48px] text-neutral-white" />
            <h3 className="text-neutral-white text-[13px] font-medium">
              Geografia
            </h3>
          </div>
        </button>{" "}
        <button className="bg-profile w-[124px] flex flex-col hover:bg-opacity-70 transition-all items-center justify-center h-[124px] rounded-[15px]">
          <div className="flex flex-col items-center justify-center gap-[13px]">
            <User className="w-[48px] h-[48px] text-neutral-white" />
            <h3 className="text-neutral-white text-[13px] font-medium">
              Perfil
            </h3>
          </div>
        </button>
      </div>
      <div>
        <WarningButton text="Desconectar" />
      </div>
    </div>
  );
};
