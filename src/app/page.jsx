import prisma from '@/libs/prisma';
import { Button } from 'antd';

const Home = async () => {

    // const marks = await prisma.marks.findMany();
    // console.log(marks);

    return (
        <div>
            111
            {/* <Button>Hello</Button>
            {/* {
                marks.map((v, index)=> {
                    return (
                        <div key={index}>{v.name}</div>
                    )
                })
            } */}
        </div>
    );
}

export default Home;