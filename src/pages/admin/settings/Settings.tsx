import CompanyProfile from "@/components/settings/CompanyProfile";
import Location from "@/components/settings/Location";
import WorkHours from "@/components/settings/WorkHours";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div>
      <h3 className="text-grey font-extrabold sm:text-2xl text-lg">Settings</h3>
      <section className="my-5">
        <Tabs defaultValue="Profile">
          <div className="w-full overflow-x-auto scrollbar-hidden">
            <TabsList className="rounded-[8px] bg-fadedGrey">
              <TabsTrigger value="Profile">Company Profile</TabsTrigger>
              <TabsTrigger value="Location">Location</TabsTrigger>
              <TabsTrigger value="Work">Work Hours</TabsTrigger>
              <TabsTrigger value="Billings">
                Billings and Subscription
              </TabsTrigger>
              <TabsTrigger value="History">Subscription History</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="Profile">
            <CompanyProfile />
          </TabsContent>
          <TabsContent value="Location">
            <Location />
          </TabsContent>
          <TabsContent value="Work">
            <WorkHours />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Settings;
