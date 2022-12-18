import {
	generateLibraryDeclaration,
	generateLocalDeclaration,
	removeUnusedDeclaration,
} from './declaration'
import { generateScss } from './style'

generateLocalDeclaration()
generateLibraryDeclaration()
removeUnusedDeclaration()
generateScss()
