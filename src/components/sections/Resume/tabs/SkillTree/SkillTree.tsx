import { Fragment } from 'react';

import {
	CATEGORY_COLORS,
	skillSections,
	type SkillCategoryKey,
	type SkillTreeNode as SkillTreeNodeType
} from '@/utils/constants/skillTreeData';

import './skillTree.css';

/* ===== Recursive Tree Node Component ===== */
interface TreeNodeProps {
	category: SkillCategoryKey;
	node: SkillTreeNodeType;
}

const TreeNode = ({ category, node }: TreeNodeProps) => {
	const colors = CATEGORY_COLORS[category];
	const hasChildren = node.children && node.children.length > 0;

	return (
		<div className='tree-node'>
			{/* Node Card */}
			<div
				className={`node-card ${node.isCategory ? 'node-category' : 'node-skill'}`}
				style={{
					background: `linear-gradient(135deg, ${colors.bg}${node.isCategory ? 'dd' : 'cc'}, ${colors.bg}${node.isCategory ? '' : 'ee'})`,
					borderColor: colors.border,
					boxShadow: `0 ${node.isCategory ? '4px 14px' : '2px 10px'} ${colors.glow}`
				}}
			>
				{node.icon && <node.icon className='text-white' size={node.isCategory ? 22 : 18} />}

				<span className={`text-white ${node.isCategory ? 'font-bold text-lg' : 'font-semibold text-sm'}`}>{node.label}</span>
			</div>

			{/* Children */}
			{hasChildren && (
				<ul className='tree-children'>
					{node.children!.map((child) => (
						<li key={child.label}>
							<TreeNode category={category} node={child} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

/* ===== Skill Tree Component ===== */
const SkillTree = () => {
	return (
		<div className='skill-tree-scroll'>
			{skillSections.map((section, index) => (
				<Fragment key={section.tree.label}>
					{index > 0 && <div className='section-connector' />}

					<div className='skill-tree-section'>
						<div className='skill-tree'>
							<TreeNode category={section.category} node={section.tree} />
						</div>
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default SkillTree;
