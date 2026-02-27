"use client";

import { createContext, useContext } from "react";
import type { EventData } from "../app/data";
import { EVENT } from "../app/data";

const BasePathContext = createContext<string>("");
const EventContext = createContext<EventData>(EVENT);

export function useBasePath() {
  return useContext(BasePathContext);
}

export function useEvent() {
  return useContext(EventContext);
}

/** ルートごとに basePath と event を渡すプロバイダ（usePathname 不使用で安定） */
export default function EventProviders({
  children,
  basePath,
  event,
}: {
  children: React.ReactNode;
  basePath: string;
  event: EventData;
}) {
  return (
    <EventContext.Provider value={event}>
      <BasePathContext.Provider value={basePath}>
        {children}
      </BasePathContext.Provider>
    </EventContext.Provider>
  );
}
