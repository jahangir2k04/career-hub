import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from 'react-apexcharts';


const Statistics = () => {

    return (
        <div>
            <h3 className='text-center text-5xl font-bold mt-2'>Statistics</h3>
            
            <div className='flex items-center mt-10'>
            <Chart className="mx-auto"
                type='donut'
                width={1150}
                height={450}
                series={[60, 49, 50, 55, 45, 59, 50]}

                options={{
                    labels:[
                        'New Year Mission', 
                        'G3-Architect', 
                        'Legal Solutions', 
                        'JS Problem Solve',
                        'Geometry Genius', 
                        'AI Universe', 
                        'Devtool and Debug', 'g'
                    ],

                    plotOptions:{
                        pie:{
                            donut:{
                                labels:{
                                    show: true,
                                    total:{
                                        show: true,
                                        showAlways: true,
                                        fontSize: 40,
                                        fontWeight: 700,
                                        color: '#9873FF'
                                    }
                                }
                            }
                        }
                    },

                }}
            />
            </div>

        </div>
    );
};

export default Statistics;