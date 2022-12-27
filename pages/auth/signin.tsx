import { Container, Section } from "components";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export type Providers = Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>;

export interface ISignInProps {
  providers: Providers;
}

export const SignIn: React.FC<ISignInProps> = (props) => {
  const router = useRouter();
  const { callbackUrl } = router.query;

  return (
    <Section>
      <Container className="flex h-screen">
        <div className="mx-auto my-auto flex flex-wrap rounded-lg items-center justify-center max-w-md border-2 border-primary p-10">
          {Object.values(props.providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => {
                  signIn(provider.id, {
                    callbackUrl: callbackUrl.toString(),
                  });
                }}
                className="w-full lg:w-auto btn btn-primary"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  const providers: Providers = await getProviders();
  return {
    props: { providers },
  };
}
