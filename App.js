import * as React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Button, ThemeProvider } from '@rneui/themed'

function Demo() {
	return (
		<SafeAreaView
			style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'grey' }}>
			<Text>This is top text.</Text>
			<Text>This is bottom text.</Text>
		</SafeAreaView>
	)
}

export default function App() {
	return (
		<>
			<ThemeProvider>
				<SafeAreaProvider>
					<Demo></Demo>
					<Button title='Hey!' />
				</SafeAreaProvider>
			</ThemeProvider>
		</>
	)
}

