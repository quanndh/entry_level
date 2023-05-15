"use client";
import Program from "@/app/components/Program";
import { trpc } from "../utils/trpc";
import Loading from "@/app/components/Loading";
import Select, { SingleValue } from "react-select";
import { ISession, ShortTitleEnum, StatusEnum } from "@/app/apis/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const defaultTheme = {
  borderRadius: 4,
  colors: {
    primary25: "green",
    primary: "white",
    neutral0: "black",
    neutral80: "white",
  },
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const status = searchParams.get("status") as StatusEnum;
  const short_title = searchParams.get("short_title") as ShortTitleEnum;

  const { data, isLoading, isFetching } = trpc.getSessions.useQuery({
    status,
    short_title,
  });

  const handleChange = (
    value: SingleValue<{ label: string; value: string }>,
    key: string
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, String(value?.value));
      router.replace(`${pathname}?${params}`);
    } else {
      params.delete(key);
      router.replace(`${pathname}?${params}`);
    }
  };

  return (
    <main className="p-2 md:p-10 lg:p-24">
      <div className="flex flex-col md:flex-row mb-4 w-full md:space-x-10 space-y-4 md:space-y-0">
        <div className="w-[200px]">
          <Select
            options={Object.keys(StatusEnum).map((x) => ({
              value: x,
              label: x,
            }))}
            value={
              status ? { value: String(status), label: String(status) } : null
            }
            placeholder="Status"
            isClearable
            theme={(theme) => ({
              ...theme,
              borderRadius: defaultTheme.borderRadius,
              colors: {
                ...theme.colors,
                ...defaultTheme.colors,
              },
            })}
            onChange={(e) => handleChange(e, "status")}
          />
        </div>
        <div className="w-[200px]">
          <Select
            options={Object.keys(ShortTitleEnum).map((x) => ({
              value: x,
              label: x,
            }))}
            value={
              short_title
                ? { value: String(short_title), label: String(short_title) }
                : null
            }
            placeholder="Short title"
            isClearable
            theme={(theme) => ({
              ...theme,
              borderRadius: defaultTheme.borderRadius,
              colors: {
                ...theme.colors,
                ...defaultTheme.colors,
              },
            })}
            onChange={(e) => handleChange(e, "short_title")}
          />
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isLoading || isFetching ? (
          <>
            {Array.from(Array(12).keys()).map((x) => (
              <Loading key={x} />
            ))}
          </>
        ) : (
          data?.map((item: ISession) => <Program data={item} key={item.id} />)
        )}
      </div>
    </main>
  );
}
