import { Heading } from "@/components/typography";
import { Column } from "@/components/layout";
import { UpdateSettingsForm } from "@/features/settings";

function Settings() {
  return (
    <Column>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Column>
  );
}

export default Settings;
