import Box from '../components/common/Box';
import Label from '../components/common/Label';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import ModalError from '../components/common/ModalError';

const Prices = () => {
    return (
        <Box title="PRECIOS">
          <div className="p-5">
            <p className="text-center font-bold pb-3">BUSQUE SU PRODUCTO</p>
            <form className="w-full">
                <div className="flex flex-col lg:flex-row -mx-3">
                    <div className="w-full lg:w-1/2 px-3 py-5">
                        <Label text="Por Nombre:" forId="nameProduct"></Label>
                        <Input id="nameProduct" placeHolder="BISTEC DE RES" ></Input>
                    </div>
                    <p className="text-center px-3 lg:py-14">ó</p>
                    <div className="w-full lg:w-1/2 px-3 lg:py-5">
                        <Label text="Por PLU:" forId="pluProduct"></Label>
                        <Input id="pluProduct" placeHolder="100"></Input>
                    </div>
                    
                </div>
                <div className="w-1/2 md:flex mt-3 md:items-center">
                    <Button body="BUSCAR"></Button>
                </div>  
            </form>
            <ModalError body="No se encontraron resultados"></ModalError>
        </div>
        </Box>
    );
  };
  
  export default Prices;