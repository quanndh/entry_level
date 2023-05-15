import { ISession, ShortTitleEnum, StatusEnum } from "@/app/apis/types";

export const SessionResolver = {
  getSessions: async (
    status?: StatusEnum | null,
    short_title?: ShortTitleEnum | null
  ): Promise<ISession[]> => {
    const url = new URLSearchParams();
    if (status) url.set("status", status);
    if (short_title) url.set("short_title", short_title);

    const res = await fetch(
      `https://api.entrylevel.net/test/sessions?${url.toString()}`
    );
    const data = await res.json();
    return data;
  },
};
