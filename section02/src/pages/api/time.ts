import { NextApiRequest, NextApiResponse } from "next";

type Time = {
  time: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Time>
) {
  console.log(req);
  const time = new Date();
  res.status(200).json({
    time: time.toLocaleString(),
  });
}
