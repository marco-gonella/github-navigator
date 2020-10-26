import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export function initializeIcons(library: FaIconLibrary) {
    // TODO: inserire solo icone utilizzate
    library.addIconPacks(fas, far, fab);
}