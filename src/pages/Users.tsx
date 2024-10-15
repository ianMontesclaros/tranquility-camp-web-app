import { Heading } from "@/components/typography";
import { SignupForm } from "@/features/authentication";
import { Column } from "@/components/layout";

function NewUsers() {
  return (
    <Column>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </Column>
  );
}

export default NewUsers;
