import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "player" | "gm";

interface RoleContextValue {
  role: Role | null;
  setRole: (r: Role) => void;
}

const RoleContext = createContext<RoleContextValue>({
  role: null,
  setRole: () => {},
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
