import { UilRedo } from '@iconscout/react-unicons'

const Refresh = ({ setRefresh }) => {
    return (
        <UilRedo
            className="text-xl text-white font-medium transition ease-out hover:scale-125 cursor-pointer hover:text-cyan-400"
            onClick={setRefresh}
        />
    )
}

export default Refresh
