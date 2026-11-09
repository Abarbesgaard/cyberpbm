import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type Role = "player" | "gm";

interface RoleContextValue {
  role: Role | null;
  setRole: (r: Role) => void;
}

const STORAGE_KEY = "cassandra-role";

const RoleContext = createContext<RoleContextValue>({
  role: null,
  setRole: () => {},
});

function readStored(): Role | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "player" || v === "gm" ? v : null;
  } catch {
    return null;
  }
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<Role | null>(readStored);
  const setRole = useCallback((r: Role) => {
    setRoleState(r);
    try {
      localStorage.setItem(STORAGE_KEY, r);
    } catch {
      // Storage may be unavailable (private mode); the choice still applies for this visit.
    }
  }, []);
  const value = useMemo(() => ({ role, setRole }), [role, setRole]);
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  return useContext(RoleContext);
}
