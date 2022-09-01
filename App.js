import * as React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function Demo() {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red' }}>
			<Text>This is top text.</Text>
			<Text>This is bottom text.</Text>
		</SafeAreaView>
	)
}

export default function App() {
	return (
		<SafeAreaProvider>
			<Demo></Demo>
		</SafeAreaProvider>
	)
}

