import ButtonComp from "../general/ButtonComp";
import Pagination from "../general/Pagination";
import LocationTable from "./LocationTable";

const Location = () => {
  return (
    <div>
      <section className="my-5 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-grey mb-2">Locations</h3>
          <p className="text-xs text-darkGrey">
            Add or update where your business operates.
          </p>
        </div>
        <ButtonComp className="w-fit" text="Add Location" showIcon />
      </section>
      <main className="border border-borderColor rounded-xl">
        <LocationTable />
        <Pagination />
      </main>
    </div>
  );
};

export default Location;
