import Image from "next/image";

import { Container } from "@/components/container";
import { Heading } from "../heading";
import { Section } from "../section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import heroImage from "/public/images/hero.webp";
import { RequestQuoteButton } from "../request-quote-btn";

export const Hero = () => {
  return (
    <Section className="flex h-auto bg-cover bg-center lg:h-screen">
      <div className="hidden  lg:block">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
        />
      </div>
      <Container className="self-end pb-16">
        <Card className="w-full lg:max-w-xl">
          <CardHeader>
            <Heading as="h2" className="mb-0 lg:mb-0">
              Be original, <u>be creative</u> choose{" "}
              <span className="text-primary">Gemprint</span>.
            </Heading>
            <CardDescription className="flex self-center lg:self-end">
              <span>
                May 2, 2018 by{" "}
                <strong className="text-primary">Maimuna Gabeyre</strong>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            Are you looking for a reliable and affordable printer? We are
            experts in print. Our experienced team is here to help you succeed.
          </CardContent>
          <CardFooter>
            <RequestQuoteButton />
          </CardFooter>
        </Card>
      </Container>
    </Section>
  );
};

export default Hero;
