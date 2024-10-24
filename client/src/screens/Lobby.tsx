import { useCallback, useState } from "react";

const LobbyScreen = () => {
	const [email, setEmail] = useState<string>("");
	const [room, setRoom] = useState<string>("");


	const handelSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ email, room })
	}, [])

	return <div className="flex flex-col justify-center items-center">
		<h1 className="text-7xl text-yellow-300 font-extrabold ">
			Lobby
		</h1>
		<form className="flex flex-col items-end text-3xl m-4" onSubmit={handelSubmit}>
			<div>
				<label htmlFor="email">Email Id :</label>
				<input className="border border-green-400 m-2 text-blue-400" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div>
				<label htmlFor="room">Room Number:</label>
				<input className="border border-green-400 m-2" type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
			</div>

			<button className="bg-blue-400 w-40 h-12 rounded-md">
				Join
			</button>
		</form>
	</div>
}


export default LobbyScreen;
