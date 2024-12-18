import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "basyo" },
    {
      name: "description",
      content:
        "なんでもない、だけどお気に入りの「場所」を共有するアプリケーション",
    },
  ];
};

export default function Index() {
  return <h1>basyo</h1>;
}
