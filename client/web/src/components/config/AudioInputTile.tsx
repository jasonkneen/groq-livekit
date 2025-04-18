import { useRef } from "react";
import { AgentMultibandAudioVisualizer } from "../visualization/AgentMultibandAudioVisualizer";

type AudioInputTileProps = {
  frequencies: Float32Array[];
};

export const AudioInputTile = ({ frequencies }: AudioInputTileProps) => {
  return (
    <div
      className={`flex flex-row gap-2 h-[100px] items-center w-full justify-center border rounded-sm border-black`}
    >
      <AgentMultibandAudioVisualizer
        state="speaking"
        barWidth={4}
        minBarHeight={2}
        maxBarHeight={50}
        accentColor={"gray"}
        accentShade={950}
        frequencies={frequencies}
        borderRadius={2}
        gap={4}
      />
    </div>
  );
};
