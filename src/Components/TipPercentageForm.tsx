const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps= {
    setTip : React.Dispatch<React.SetStateAction<number>>,
    tip?: number
}

function TipPercentageForm({setTip,tip}:TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl"> Tip: </h3>

            <form>

                <div>
                {tipOptions.map(tipOption=>(
                    <div
                     className="flex -gap-2"
                    key={tipOption.label}>

                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                    type="radio"
                    name="tipOption"
                    value={tipOption.value}
                    id={tipOption.id}
                    onChange={e=> setTip(+e.target.value)}
                    checked={tipOption.value==tip}
                    ></input>
                </div>))}
                </div>
            </form>
        </div>
    )
}

export default TipPercentageForm