import { v4 as uuidV4 } from "uuid";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";

const config: Config = {
  dictionaries: [names],
};

export type PaymentStatus = "pending" | "processing" | "success" | "failed";

export type Payment = {
  id: string;
  amount: number;
  status: PaymentStatus;
  email: string;
  clientName: string;
};

const randomStatus = () => {
  const statuses = ["pending", "processing", "success", "failed"] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const randomEmail = (clientName: string) => {
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${clientName}@${randomDomain}`;
};

export const payments = (): Payment[] => {
  return Array.from({ length: 100 }, () => {
    const randomName = uniqueNamesGenerator(config);

    return {
      id: uuidV4(),
      amount: Math.floor(Math.random() * 10000) / 100,
      status: randomStatus(),
      clientName: randomName,
      email: randomEmail(randomName.toLowerCase()),
    };
  });
};
